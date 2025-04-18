import contentful from 'contentful-management'
import dotenv from 'dotenv'

dotenv.config()

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY
})

async function archiveOldEvents() {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment('master')

  const entries = await environment.getEntries({
    content_type: 'events',
    limit: 1000
  })

  const now = new Date()
  console.log(`Now: ${now.toISOString()}`)

  const oldEntries = entries.items.filter(entry => {
    const dateObj = entry.fields.eventDateTime
    const dateStr = dateObj?.['fi'] || dateObj?.['en-US'] || dateObj?.['en']
    if (!dateStr) return false

    const date = new Date(dateStr)
    console.log(`Parsed date: ${date.toISOString()} | is old: ${date < now}`)

    return date < now
  })

  for (const entry of oldEntries) {
    const title = entry.fields.eventTitle?.fi || entry.fields.eventTitle?.['en-US'] || 'No title'
    const dateStr = entry.fields.eventDateTime?.fi || entry.fields.eventDateTime?.['en-US']
    console.log(`Archiving: ${title} | Date: ${dateStr} | isArchived: ${entry.isArchived}`)

    if (!entry.isArchived) {
      await entry.archive()
    }
  }

  console.log(`Archived ${oldEntries.length} old events.`)
}

archiveOldEvents().catch(console.error)
