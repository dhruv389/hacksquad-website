import findUserAndTeam from '~/helpers/find.user.and.team';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  console.log(user);
}
