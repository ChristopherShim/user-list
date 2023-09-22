import classes from "./UsersList.module.css";
import Card from "../Card/Card";

function UsersList(props) {
  return (
    <Card propsClass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
