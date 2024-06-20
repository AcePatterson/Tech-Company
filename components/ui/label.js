import { cx } from "@/utils/all";

export default function Label(props) {
  const margin = props.nomargin;

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium uppercase tracking-wider ",
        !margin && " mt-5",
        "bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent dark:text-gray-400"
      )}>
      {props.children}
    </span>
  );
}
