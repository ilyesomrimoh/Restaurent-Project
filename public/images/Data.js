export const orders = [
    {
      order_id: "12345",
      restaurant_id: "5678",
      date: "2023-05-12T14:30:00Z",
      items: [
        {
          name: "Burger",
          quantity: 2,
          price: 9.99
        },
        {
          name: "Fries",
          quantity: 1,
          price: 4.99
        },
        {
          name: "Soda",
          quantity: 2,
          price: 1.99
        }
      ],
      price: 28.96,
      status: "Processing",
      location: "123 Main St, Anytown, USA",
      user_id: "789"
    },
    {
      order_id: "67890",
      restaurant_id: "2468",
      date: "2023-05-09T18:45:00Z",
      items: [
        {
          name: "Pizza",
          quantity: 1,
          price: 12.99
        },
        {
          name: "Garlic Bread",
          quantity: 1,
          price: 6.99
        }
      ],
      price: 19.98,
      status: "Delivered",
      location: "456 Main St, Anytown, USA",
      user_id: "123"
    }
  ];
  