export default interface IEvent {
  date: string
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
