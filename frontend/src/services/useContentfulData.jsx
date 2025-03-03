import { useQuery } from "@tanstack/react-query"
import client from "../components/contentful"

const fetchContentfulData = async () => {
  const [eventsRes, collabsRes, diamondCollabsRes] = await Promise.all([
    client.getEntries({ content_type: "events" }),
    client.getEntries({ content_type: "collabs" }),
    client.getEntries({ content_type: "diamondCollab" })
  ])

  return {
    events: eventsRes.items.map(item => ({
        id: item.fields.eventId,
        title: item.fields.eventTitle,
        description: item.fields.eventDesc,
        date: item.fields.eventDateTime,
        picture: item.fields.eventPicture,
        url: item.fields.eventUrl
    })),
    collabs: collabsRes.items.map(item => ({
        id: item.fields.collabId,
        logo: item.fields.collabLogo,
        url: item.fields.collabUrl
    })),
    diamondCollabs: diamondCollabsRes.items.map(item => ({
        id: item.fields.diamondCollabId,
        logo: item.fields.diamondCollabLogo,
        url: item.fields.diamondCollabUrl
    }))
  }
}

export const useContentfulData = () => {
    return useQuery({
      queryKey: ["contentfulData"], 
      queryFn: fetchContentfulData,
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 60 * 24,

    })
  }
  