export default interface IEvent {
  date: Date
  goingCount: number
  url: string
  venue: {
    city: string
    country: string
    lat: number
    lon: number
    name: string
    street: string
  }
}
