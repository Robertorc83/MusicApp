type Props = {
  data: string[];
};
const styles = "text-white my-2 hover:scale-110 lg:hover:ml-5";

function Linkslist({ data }: Props) {
  return (
    <div>
      {data.map((item) => (
        <p key={item} className={styles}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Linkslist;
