import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const HamburgerDropdown = (props: any) => {
  let { navItems, children } = props;
  return (
    <>
      <RadixDropdownMenu.Root>
        <RadixDropdownMenu.Trigger>{children}</RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content
            collisionPadding={{ right: 16 }}
            className="mt-1 flex max-w-xs flex-col rounded-2xl bg-neutral-800 px-5 py-3 shadow-md"
          >
            {navItems.map((item: any) => {
              return (
                <span className="my-1 flex flex-col items-center justify-center self-start">
                  <RadixDropdownMenu.Item className="rounded-md px-2 py-2 font-medium text-gray-100 hover:bg-neutral-700">
                    <Link href={item.link}>{item.name}</Link>
                  </RadixDropdownMenu.Item>
                </span>
              );
            })}
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </>
  );
};

export default HamburgerDropdown;
