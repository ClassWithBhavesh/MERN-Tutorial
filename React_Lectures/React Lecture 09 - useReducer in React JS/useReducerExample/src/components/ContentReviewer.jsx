import React, { useState } from "react";

function ContentReviewer() {
  const [queue, setQueue] = useState([
    {
      id: 101,
      title: "Iran & America War Updates",
      description:
        "liaysclijbsdilcbiabscilaskcjbalskchlamsnckahscklmasichalksmcblkajsclkabnclkjasck",
      status: "pending",
    },
    {
      id: 102,
      title: "LPG Shortage",
      description:
        "liaysclijbsdilc-0irplsoidhcpanmsoichoaskncohasonpasgphoeifhmasichalksmcblkajsclkabnclkjasck",
      status: "pending",
    },
    {
      id: 103,
      title: "Global Stock Market Crash",
      description:
        "aklsjdhalksdhalkshdklashdlkashdlkashdlkashdlkasdhklashdlkashdlkashdlkashdlkashdlk",
      status: "pending",
    },
    {
      id: 104,
      title: "Heavy Rainfall Alert",
      description:
        "poiuqweoiuqweoiuqweoiuqweoiuqweoiuqweoiuqweoiuqweoiuqweoiuqweoiuqweoiuqwe",
      status: "pending",
    },
    {
      id: 105,
      title: "Tech Layoffs Continue",
      description:
        "zmxncbzmxncbzmxncbzmxncbzmxncbzmxncbzmxncbzmxncbzmxncbzmxncbzmxncbzmxncb",
      status: "pending",
    },
    {
      id: 106,
      title: "New Education Policy",
      description:
        "qweasdzxcqweasdzxcqweasdzxcqweasdzxcqweasdzxcqweasdzxcqweasdzxcqweasdzxc",
      status: "pending",
    }
  ]);

  const [stats, setStats] = useState({
    approved: 0,
    rejected: 0,
  });

  const approveContent = (id) => {
    const updateQueue = queue.map((item) =>
      item.id === id ? { ...item, status: "approved" } : item,
    );

    setQueue(updateQueue);

    setStats((prev) => ({
      ...prev,
      approved: prev.approved + 1,
    }));
  };
  const rejectContent = (id) => {
    const updatedQueue = queue.map((item) =>
      item.id === id ? { ...item, status: "rejected" } : item,
    );

    setQueue(updatedQueue);

    setStats((prev) => ({
      ...prev,
      rejected: prev.rejected + 1,
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Content Reviewer</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>Approved : {stats.approved}</p>
        <p>Rejected : {stats.rejected}</p>
      </div>
      <br />
      <br />
      {queue.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} - {item.status}
          </p>
          {item.status === "pending" && (
            <>
              <button onClick={() => approveContent(item.id)}>Approve</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => rejectContent(item.id)}>Reject</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContentReviewer;
