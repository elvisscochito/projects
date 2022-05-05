const URL = 'https://fierce-castle-00615.herokuapp.com'

const $fetch = ({ endpoint, method, body, token }) =>
  fetch(URL + endpoint, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  })
    .then(res => res.ok && res.json())
    .catch(error => ({ error }))

const $post = ({ endpoint, body, token }) =>
  $fetch({ endpoint, method: 'POST', body, token })

const $get = ({ endpoint, token }) => $fetch({ endpoint, method: 'GET', token })

/* ====== API ====== */

export const createUser = ({ username, password, email }) =>
  $post({
    endpoint: '/player',
    body: { username, password, email },
  })

export const getAllUsers = () => $get({ endpoint: '/player' })

export const getPlayerInfo = ({ username }) =>
  $get({ endpoint: `/player/${username}` })

export const playerLogin = ({ username, password }) =>
  $post({
    endpoint: '/player/login',
    body: { username, password },
  })

export const createEvent = ({ name, description, value }) =>
  $post({
    endpoint: '/event',
    body: { name, description, value },
  })

export const getAllEvents = () => $get({ endpoint: '/event' })

export const getAllMatches = () => $get({ endpoint: '/match' })

export const getMatchInfo = ({ id }) => $get({ endpoint: `/match/${id}` })

export const createMatch = ({ duration, events }) =>
  $post({
    endpoint: '/match',
    body: { duration, events },
  })

export const followPlayer = ({ username, token }) =>
  $post({
    endpoint: `/follow/${username}`,
    token,
  })

export const getFollowedPlayers = ({ token }) =>
  $get({
    endpoint: '/follow',
    token,
  })

export const getFollowers = ({ token }) =>
  $get({
    endpoint: '/followers',
    token,
  })

export default {
  createUser,
  getAllUsers,
  getPlayerInfo,
  playerLogin,
  createEvent,
  getAllEvents,
  getAllMatches,
  getMatchInfo,
  createMatch,
  followPlayer,
  getFollowedPlayers,
  getFollowers,
}