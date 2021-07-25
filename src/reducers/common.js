import * as ActionTypes from "../constants/ActionTypes"

const initialState = {
  marketCards: [
    {
      key: "card_1",
      image:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
      avatar:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
      link: "@eddieravera_",
      description:
        "2021 Topps Baseball Series 1 Factory Sealed 67 Card Hanger Pack",
      price: "$19.99",
      status: "PURCHASED",
      time: "Less than a minute ago",
    },
    {
      key: "card_2",
      image:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
      avatar:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
      link: "@eddieravera_",
      description:
        "2021 Topps Baseball Series 1 Factory Sealed 67 Card Hanger Pack",
      price: "$19.99",
      status: "PURCHASED",
      time: "Less than a minute ago",
    },
    {
      key: "card_3",
      image:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
      avatar:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=140&w=400",
      link: "@eddieravera_",
      description:
        "2021 Topps Baseball Series 1 Factory Sealed 67 Card Hanger Pack",
      price: "$19.99",
      status: "PURCHASED",
      time: "Less than a minute ago",
    },
  ],
}

const actionsMap = {
  [ActionTypes.SET_META](state, action) {
    return { ...state, ...action.data }
  },
}

export default function common(state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
