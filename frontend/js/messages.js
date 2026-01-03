// const mob = "header: { type: String, trim: true },
//   service: { type: String, required: true, trim: true },
//   message: { type: String, required: true, trim: true },
//   likes: { type: Number },
//   time: { type: Date, required: true },"

const messageDiv = document.querySelector(".messageDiv");
const feedInput = document.getElementById("feedInpt");
const sendBtn = document.getElementById("sendBtn");
const messageEl = `<div class="messages">
                <div class="content">
                    <h3>Header: [Feedback Topic]</h3>
                    <p>Company In Review: [A Company]</p>
                    <p>Post: [Feedback Content]</p>
                    <div class="miniInfo">
                        <span>Likes: [Likes Count]</span>
                        <span>|</span>
                        <span>Time: [When Posted]</span>
                    </div>
                </div>
                <div class="messageActions">
                    <button type="button" title="like">
                        <span class="material-symbols-outlined">thumb_up</span>
                    </button>
                    <button type="button" title="comment">
                        <span class="material-symbols-outlined">message</span>
                    </button>
                    <button type="button" title="share"><span class="material-symbols-outlined">share</span></button>
                </div>
            </div>`;

const postFeedback = async (json) => {
  try {
    const res = await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });

    if (!res.ok) throw new Error(`Post Error: ${res.status}`);

    console.log("Feedback Sent");
  } catch (err) {
    console.error("Fetch Error: ", err);
  }
};
