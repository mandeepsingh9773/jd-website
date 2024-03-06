import React from "react";
// import Category_IMG from "../images/category_1.png"
// import Category_IMG2 from "../images/category_2.png"
// import Category_IMG3 from "../images/category_3.png"
// import Category_IMG4 from "../images/category_4.png"
// import Category_IMG5 from "../images/category_5.png"

const CategorySection = () => {
  return (
    <div className="main bg-black md:p-6">
      <div className="category flex flex-row gap-6 pt-12 justify-center md:justify-start  md:px-24">
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          View All
        </button>
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          Brading
        </button>
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          Digital Media
        </button>
        <button className="bg-black text-white md:text-[24px] hover:text-[#FF9000]">
          Graphics{" "}
        </button>
      </div>
      <div className="cards flex flex-col gap-10 py-8 md:grid md:grid-cols-4 md:gap-9 md:px-24 md:py-12">
        <div className="image_card1 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/e477/d316/97723222987a65aa596537ca4810b1a2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pTUR-LXdwlt3Cc4R4~JZIILp9i4gb424o3aowjSk5uLZEvQZv1pS5iK3sq9seDIOlWBaI4AixzIhJbI27G3khizLB7KWgdEidyM8WKkGDyOT7cPTXlJyiVsg--Em-prqGyQ6fVi8WXL9I7zv4v8tQ1Nt2wSuzkmx1xR0iJJpYUQHaeFjetRWywpSs611~vIn6KCXbQ4FG5aj0do04L-6S4LEU8LC3QBb7vCl7V5ppPZglySHp3y5xaMr8khZC9vQPtLCVzh1o4vd2uOWb9xyYoQgStT5UJy8IJ12VnHFDOJrh4jV30oWM9OW-icaVhBvWThps62NF3rDyl4Pv-BXYw__"
            alt="category"
          />
          <p className=" text-white pt-2 md:text-[25px] md:text-left md:pt-2 ">
            Education Institute
          </p>
          <p className=" text-[#8B8B8B] md:text-[20px] md:text-left">
            Branding, Logo
          </p>
        </div>
        <div className="image_card2 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/24c0/7bb3/cc61f357d36f4bde6ca0a168b49735a4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kEu2WnSWTR7gFQO700NNwwqkHDBL7HSRRPfAUnmIcKSQIDZ-JsIkSzWVqv5wuce2qywC3t4QjPvkOY77iwLbPnpxyC~IIj52R0OPIuGDPwwxDmSh-9XLWZbL2OzFakiT~MyH2I66~FDNNONfXBU1HQ~xmfWie1BBwsMl3j~Wmvse-LpER5BmzsQT7jzLKy19iGnW5r5RCnH~OuUbeGhr8mU4GglgA~-zO8Cu~6qkPWlI~wk5jJypvxyaNbsvv8UYGv-rtOkGSOv6ipjS2N3ow2GbfNhB3-a4HcM8vahXXJNZp23ozsUlrMW-z8CpW5bDcxSelH8KZSFXWsJN8CpNvg__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Backdrops
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Branding, Banners
          </p>
        </div>
        <div className="image_card3 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/2a75/20d7/e02678433ecfc667792c6fc4fdf9e599?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWonGFxgNRNqzP50jXH51R0XIY-BTfGS~lYK-G2KSvCXkAxwtYGHEw75staAyfoovY-DKHLYng434obesRXXGam~5oqHfs-ckqRvDdB3tn5CGdi2xs-OF7AKIcdHA9LRzNtoZhJbfDCK9SQvQWDBsOU9TVA6KEr35oRBALpcOCcYC7pN2kgQyTXDQor5djcOkLkb~~xTOz4iufvPXmxd6oDfFvFgAe1RdsTGnuKK~DCQ422XUIPjSF019aj5twjPaFFUHgVUKyG6ij9SHMbqZBIWadnNHnpLsu0sL3mTu~BwZxtlreHZ~f3xUnuN6SVm0wPLG8lUGtDDrpOdxKtEuA__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Product Booklet
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Product Showcase
          </p>
        </div>
        <div className="image_card4 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/6757/5060/5c9398f152cdc6fe7f4647b322f9c605?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbXjfu0OQ9u4Vg2ao0PrIr0wWnO-goxW1zG-yrOjd7xCjhAYZOc1z1SQxaC5kuQCfb6839dCl3ujUwZROZ47qYa2IE66yOsCZSXpTrR5A~jYC56Wx3IUhnDgTKLMbcc0bt7eW~iAM36F5ti-4xnxKDCjwavVg2YC0ZQ2QBsaYntof111y~5YThEUMmUdwSfxyI~YT-xwhPPC6zoDDbTwLtVeRX~4INCt1zA2uLTk00mgC08TyIdlrttQwYcz1M9qMifnkJdaS465Sf0huPDdySo9rAxJiIPkcYL-BwcXz2vMBLG93XdmS0lbdA2~y8ul2t-BijMOrmkcykpIGMZ9BQ__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Corporate Promotional
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left ">
            Promotion, Cinematography
          </p>
        </div>
        <div className="image_card5 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/4083/5c0f/4e23bd25b59af2f95b526ae1c905da10?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOrZQ~DbwHVbTqUxxfVhoV4tiC5-M0byjqgkuAFqFf6CeqQHStvbxxc5~dWTOHSSrfbDLe2n4oHwqOLnDXrrF0dhV5A11y7zkX5zDvbRAvwhRnpiXcX5Y14wm65GWiU7umIBC5CsWqHYeRdUYt~pQSSjN9~TncbMqHv7ME0LjjGNn4G-Kzte4i3WUe-D65Lm6dWFKdDT~xmq7m4kPdsA79tvyFc7mDnP70iMA3p14VwaxshkinRPLaAgwSEJF3vPCEAOMvWdDn7GpW9QOGvO6wjPGx1ZPUyJ8mvBii6EvZrE-fw4s1pnmF4xi3MtbJhvPkn7S7TyH4K88xo-bazYNA__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Custom Frames
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Home Decor, Frames
          </p>
        </div>
        <div className="image_card6 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0 "
            src="https://s3-alpha-sig.figma.com/img/24c0/7bb3/cc61f357d36f4bde6ca0a168b49735a4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kEu2WnSWTR7gFQO700NNwwqkHDBL7HSRRPfAUnmIcKSQIDZ-JsIkSzWVqv5wuce2qywC3t4QjPvkOY77iwLbPnpxyC~IIj52R0OPIuGDPwwxDmSh-9XLWZbL2OzFakiT~MyH2I66~FDNNONfXBU1HQ~xmfWie1BBwsMl3j~Wmvse-LpER5BmzsQT7jzLKy19iGnW5r5RCnH~OuUbeGhr8mU4GglgA~-zO8Cu~6qkPWlI~wk5jJypvxyaNbsvv8UYGv-rtOkGSOv6ipjS2N3ow2GbfNhB3-a4HcM8vahXXJNZp23ozsUlrMW-z8CpW5bDcxSelH8KZSFXWsJN8CpNvg__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Backdrops
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Branding, Banners
          </p>
        </div>
        <div className="image_card7 flex flex-col md:w-[290px]">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/2a75/20d7/e02678433ecfc667792c6fc4fdf9e599?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWonGFxgNRNqzP50jXH51R0XIY-BTfGS~lYK-G2KSvCXkAxwtYGHEw75staAyfoovY-DKHLYng434obesRXXGam~5oqHfs-ckqRvDdB3tn5CGdi2xs-OF7AKIcdHA9LRzNtoZhJbfDCK9SQvQWDBsOU9TVA6KEr35oRBALpcOCcYC7pN2kgQyTXDQor5djcOkLkb~~xTOz4iufvPXmxd6oDfFvFgAe1RdsTGnuKK~DCQ422XUIPjSF019aj5twjPaFFUHgVUKyG6ij9SHMbqZBIWadnNHnpLsu0sL3mTu~BwZxtlreHZ~f3xUnuN6SVm0wPLG8lUGtDDrpOdxKtEuA__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Product Booklet
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left">
            Product Showcase
          </p>
        </div>
        <div className="image_card8 flex flex-col md:w-[290px] ">
          <img
            className="w-full h-[200px] object-cover md:h-[410px] md:w-[290px] md:object-cover grayscale hover:grayscale-0"
            src="https://s3-alpha-sig.figma.com/img/6757/5060/5c9398f152cdc6fe7f4647b322f9c605?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbXjfu0OQ9u4Vg2ao0PrIr0wWnO-goxW1zG-yrOjd7xCjhAYZOc1z1SQxaC5kuQCfb6839dCl3ujUwZROZ47qYa2IE66yOsCZSXpTrR5A~jYC56Wx3IUhnDgTKLMbcc0bt7eW~iAM36F5ti-4xnxKDCjwavVg2YC0ZQ2QBsaYntof111y~5YThEUMmUdwSfxyI~YT-xwhPPC6zoDDbTwLtVeRX~4INCt1zA2uLTk00mgC08TyIdlrttQwYcz1M9qMifnkJdaS465Sf0huPDdySo9rAxJiIPkcYL-BwcXz2vMBLG93XdmS0lbdA2~y8ul2t-BijMOrmkcykpIGMZ9BQ__"
            alt="category"
          />
          <p className="text-white pt-2 md:text-[25px] md:text-left md:pt-2">
            Corporate Promotional
          </p>
          <p className="text-[#8B8B8B] md:text-[20px] md:text-left ">
            Promotion, Cinematography
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
