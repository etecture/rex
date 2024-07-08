import { Stack } from "@mantine/core";
import { IconCompass, IconInfoCircle } from "@tabler/icons-react";
import type React from "react";

import { NavItemCategory } from "./NavItemCategory/NavItemCategory";
import { NavItemPrimary } from "./NavItemPrimary/NavItemPrimary";

const Nav: React.FC = () => {
  return (
    <Stack h={"100%"} w={250} bg="dark" py={"xl"} pl={"md"} gap={"xs"}>
      <NavItemPrimary route={"/"} label={"Getting Started"} icon={<IconCompass />} />
      <NavItemPrimary route={"/docs/about"} label={"About"} icon={<IconInfoCircle />} />

      <Stack mt={"lg"}>
        <NavItemCategory
          label="components"
          items={[
            { label: "Table", route: "/docs/components/table" },
            { label: "Scrollbar", route: "/docs/components/scrollbar" },
            { label: "Swiper", route: "/docs/components/swiper" },
          ]}
        />

        <NavItemCategory
          label="hooks"
          items={[
            { label: "useBreakpoint", route: "/docs/hooks/use-breakpoint" },
            { label: "useSwiper", route: "/docs/hooks/use-swiper" },
            { label: "useHotkeys", route: "/docs/hooks/use-hotkeys" },
            { label: "useToggle", route: "/docs/hooks/use-toggle" },
            { label: "useIsIdle", route: "/docs/hooks/use-is-idle" },
            { label: "useOnChange", route: "/docs/hooks/use-on-change" },
          ]}
        />

        <NavItemCategory
          label="functions"
          items={[
            { label: "findKey", route: "/docs/functions/findKey" },
            { label: "insertOrUpdate", route: "/docs/functions/insertOrUpdate" },
            { label: "moveElementInArray", route: "/docs/functions/moveElementInArray" },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export { Nav };
