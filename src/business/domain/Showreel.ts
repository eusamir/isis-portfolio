export interface ShowreelProps{
  url: string
  title: string
  description: string
}

export class Showreel{
  constructor(public readonly props: ShowreelProps){}
}