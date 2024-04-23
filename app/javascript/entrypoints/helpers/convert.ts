
export const convertDate = (date: string | number | Date) => {
    const event = new Date(date);
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    return event.toLocaleDateString("en-GB", options).replace(/ /g, " ");
  };
