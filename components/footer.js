import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}.
        All rights reserved.
      </div>
      <div className="absolute right-[100px] flex items-center justify-between">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
