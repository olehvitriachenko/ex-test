import { UserStatus as DB } from "generated/prisma/enums";
import { UserAccountStatus as Client } from "../enums";

const toDBMap: Record<Client, DB> = {
    [Client.ACTIVE]: DB.active,
    [Client.BANNED]: DB.banned
}

const fromDBMap: Record<DB, Client> = {
    [DB.active]: Client.ACTIVE,
    [DB.banned]: Client.BANNED
}

export const mapUserStatusToDB = (value: Client): DB => toDBMap[value];
export const mapUserStatusFromDB = (value: DB): Client => fromDBMap[value];