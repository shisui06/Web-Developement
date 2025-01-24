import { Avatar, AvatarFallback } from "@packages/ui/components/avatar";

type AvatarListProps = {
  users: Array<{
    first_name: string;
    last_name: string;
  }>;
  limit: number;
};
function userFallBackName(firstName: string, lastName: string) {
  let firstLetter = !!firstName ? firstName[0] : "";
  let lastLetter = !!lastName ? lastName[0] : "";
  return `${firstLetter}${lastLetter}`;
}

export function AvatarList({ users, limit }: AvatarListProps) {
  return (
    <div className="flex flex-row">
      {users.map((user) => (
        <Avatar key={"pierre"} className="-mx-2 first:m-0">
          <AvatarFallback className="uppercase">
            {userFallBackName(user.first_name, user.last_name)}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
