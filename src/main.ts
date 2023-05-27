export default async (event: any) => {
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify("Business Dog is all Business"),
  };

  return response;
};
