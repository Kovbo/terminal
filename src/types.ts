export type Story = {
  id: number;
  text: string[];
  options: (
    | { text: string; nextText: number; hide?: undefined }
    | { text: string; hide: boolean; nextText: number }
  )[];
}[];
