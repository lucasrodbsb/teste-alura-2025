enum ACTUAL_PAGE_ENUM {
  HOME = "home",
  BLOG = "blog",
}

interface IHeaderProps {
  actualPage: ACTUAL_PAGE_ENUM;
}

export { type IHeaderProps, ACTUAL_PAGE_ENUM };
