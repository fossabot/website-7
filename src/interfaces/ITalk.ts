export default interface ITalk {
  date: string
  description: string
  isLightningTalk: boolean
  labels: string[]
  speaker: {
    avatarUrl: string
    name: string
    occupation: string
    socialName?: string
    socialUrl?: string
  }
  title: string
}
