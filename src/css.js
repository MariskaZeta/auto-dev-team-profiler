const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d1e0e0;
}
.banner-bar {
    background-color: #808a87;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    line-height: 75%;
}
h1 {
    font-family: avenir;
    font-size: 8vw;
}
p {
    font-family: avenir;
    position: relative;
    left: 12px;
}
h2 {
    font-family: avenir;
    position: relative;
    font-size: 17px;
    left: 12px;
    color: #ffffff;
}
.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: #5a5c5b;
    border: 2px solid #5a5c5b;
    width: 246px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;
