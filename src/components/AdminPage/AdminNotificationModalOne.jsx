function AdminNotificationModalOne() {
  const noification = [
    {
      id: 1,
      text: "voluptatum minus rem magni voluptas tempora nam? Illo molestia",
    },
    {
      id: 2,
      text: "eos perspiciatis asperiores unde aliquid maxime possimus corporis.",
    },
    {
      id: 3,
      text: " aliquid maxime possimuseos perspiciatis asperiores unde corporis.",
    },
    {
      id: 4,
      text: "e aliquid maxime peos perspiciatis asperiores undossimus corporis.",
    },
  ];
  return (
    <div className="adminNotificationModalOne-root">
      <ul className="adminNotificationModalOne-list">
        {noification.map(({ id, text }) => (
          <li key={`notification-${id}`}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNotificationModalOne;
