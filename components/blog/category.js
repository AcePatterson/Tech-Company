import Label from "@/components/ui/label";

export default function CategoryLabel({
  categories,
  nomargin = false
}) {
  return (
    <div className="flex gap-3">
      <Label nomargin={nomargin}>{categories}</Label>
    </div>
  );
}
