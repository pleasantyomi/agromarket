interface LineProps {
  className: string;
}

export default function Line({ className }: LineProps) {
  return <div className={`${className} bg-gray-200 h-[1px]`}></div>;
}
