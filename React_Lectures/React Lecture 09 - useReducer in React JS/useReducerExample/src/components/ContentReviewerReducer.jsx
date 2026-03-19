import React, { useReducer } from "react";

const initialState = {
  queue: [
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
    },
  ],
  stats: {
    approved: 0,
    rejected: 0,
  },
};

function reducer(state, action){
    switch (action.type){
        case "APPROVE":
            return {
                ...state,
                queue: state.queue.map(item => item.id === action.payload? {...item, status: "approved"} : item),
                stats: {
                    ...state.stats,
                    approved: state.stats.approved + 1
                }
            };
        case "REJECT":
            return {
                ...state,
                queue: state.queue.map(item => item.id === action.payload? {...item, status: "rejected"} : item),
                stats: {
                    ...state.stats,
                    rejected: state.stats.rejected + 1
                }
            }
    }
}

function ContentReviewerReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Content Reviewer</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>Approved : {state.stats.approved}</p>
        <p>Rejected : {state.stats.rejected}</p>
      </div>
      <br />
      <br />
      {state.queue.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} - {item.status}
          </p>
          {item.status === "pending" && (
            <>
              <button onClick={() => dispatch({type: "APPROVE", payload: item.id})}>Approve</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => dispatch({type: "REJECT", payload: item.id})}>Reject</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContentReviewerReducer;
