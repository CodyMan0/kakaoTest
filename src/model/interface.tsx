export type Data = {
  data:
    | (() => Promise<void>)
    | { data: undefined; isLoading: boolean; error: undefined };
};
