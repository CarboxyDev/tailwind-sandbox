import * as RadixPopover from "@radix-ui/react-popover";
import type { TooltipProps } from "../types/props";

const Popover = (props: TooltipProps) => {
  const { children, text } = props;

  return (
    <>
      <RadixPopover.Root>
        <RadixPopover.Trigger>{children}</RadixPopover.Trigger>
        <RadixPopover.Portal>
          <RadixPopover.Content
            collisionPadding={{ left: 16, right: 16 }}
            sideOffset={4}
            className="max-w-xs rounded-lg bg-neutral-800 px-6 py-4 text-sm text-white shadow"
          >
            {text}
            <RadixPopover.Arrow className="fill-neutral-800" />
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>
    </>
  );
};

export default Popover;
