const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"}),React.createElement("div",
{},React.createElement("h1",
{id:"heading",
xyz:"xyx"
},"Hello from react")));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);