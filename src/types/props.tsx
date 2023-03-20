export type HeaderSectionProps = {
  variant: "light" | "dark";
  heading: string;
  content: string;
  animate?: boolean;
  className?: string; // only use for HeaderContent FC
};

/* FillerProps can only have either height or width but must have one of them */
export type FillerProps = {
  height?: number;
  width?: number;
} & ({ height: number; width?: never } | { width: number; height?: never });

export type HamburgerDropdownProps = {
  navItems: {
    name: string;
    link: string;
  }[];
};

export type TooltipProps = {
  text: string;
  children: JSX.Element;
};

export type TestimonialCardProps = {
  comment: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
};

export type PricingCardProps = {
  plan: {
    type: string;
    name: string;
    price: string;
    benefits: string[];
  };
  button: {
    buttonText: string;
    buttonType: "primary" | "secondary" | "tertiary";
  };
};

export type CompactCardProps = {
  title: string;
  text: string;
  icon: JSX.Element;
};

export type CardWithImageProps = {
  image: string;
  heading: string;
  content: string;
};

export type CardWithImageAndButtonProps = {
  image: string;
  heading: string;
  content: string;
  buttonText: string;
};

export type ButtonProps = {
  children: JSX.Element;
};
