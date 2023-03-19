import * as RadixPopover from "@radix-ui/react-popover";
import Button from "./Button";

const Popover = (props: any) => {
  let { children, popoverContent } = props;

  return (
    <>
      <RadixPopover.Root>
        <RadixPopover.Trigger>{children}</RadixPopover.Trigger>
        <RadixPopover.Portal>
          <RadixPopover.Content className="max-w-xs rounded-2xl bg-gray-700 px-5 py-3 text-sm text-white">
            {popoverContent}
            <RadixPopover.Arrow className="fill-gray-700" />
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>
    </>
  );
};

export default Popover;
