interface LoadeProps {
  src: string;
  width: number;
  quality?: number | undefined;
}

export default function myLoader({ src, width, quality }: LoadeProps) {
  console.log(src, width, quality)
  return `${process.env.NEXT_ASSESTS_URL}/${src}?w=${width}&q=${quality || 75}`
}