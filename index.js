const Button = (props) => {
  const { className, buttonName } = props;
  return <button className={"btn"}>{buttonName}</button>;
  //  Write your code here.
};

const element = (
  <div className="backGroundImage">
    <h1 className="heading">Social Buttons</h1>
    <div class="btn">
      <button className="likeBtn" buttonName="Like" />
      <button className="commentBtn" buttonName="Comment" />
      <button className="shareBtn" buttonName="Share" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
