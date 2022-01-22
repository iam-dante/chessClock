import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function SettingsIcon(props){
    return(

  <Svg
    {...props}
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.639 3.375c.727-3 4.995-3 5.723 0a2.945 2.945 0 0 0 4.395 1.821c2.636-1.606 5.655 1.411 4.049 4.049a2.944 2.944 0 0 0 1.82 4.394c2.999.727 2.999 4.995 0 5.723a2.945 2.945 0 0 0-1.822 4.395c1.606 2.636-1.411 5.655-4.049 4.049a2.944 2.944 0 0 0-4.393 1.82c-.728 2.999-4.996 2.999-5.723 0a2.945 2.945 0 0 0-4.396-1.822c-2.636 1.606-5.655-1.411-4.049-4.049a2.945 2.945 0 0 0-1.82-4.393c-2.999-.728-2.999-4.996 0-5.723a2.945 2.945 0 0 0 1.822-4.396C3.59 6.607 6.607 3.588 9.245 5.194c1.701 1.039 3.922.12 4.394-1.82Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.625 16.5a5.125 5.125 0 1 1-10.25 0 5.125 5.125 0 0 1 10.25 0v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    )
}

export function PlayIcon(props){
    return(

    <Svg
      {...props}
      width={26}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.805 18.044c1.88-1.175 1.88-3.913 0-5.088L5.132 1.286C3.134.035.542 1.472.542 3.828v23.342c0 2.356 2.592 3.792 4.59 2.544l18.673-11.671Z"
        fill="#fff"
      />
    </Svg>
    )
}


export function ResetIcon(props) {
    return(

    <Svg
      {...props}
      width={29}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.75 6.457v1.224l.857-.874a13.854 13.854 0 0 1 22.954 5.077l.005.013a1.55 1.55 0 1 1-2.922 1.033l-.002-.007-.003-.007A10.754 10.754 0 0 0 5.898 10.05l-.6.8h7.152a1.55 1.55 0 1 1 0 3.1H2.2a1.55 1.55 0 0 1-1.096-.454l-.352.352.352-.352A1.55 1.55 0 0 1 .65 12.4V2.15a1.55 1.55 0 0 1 3.1 0v4.307Zm1.571 20.415a13.854 13.854 0 0 1-3.882-5.756 1.55 1.55 0 0 1 .946-1.978 1.55 1.55 0 0 1 1.667.426l.372-.334-.372.334c.136.151.241.328.309.52a10.754 10.754 0 0 0 18.741 2.866l.6-.8H16.55a1.55 1.55 0 1 1 0-3.1H26.8a1.55 1.55 0 0 1 1.55 1.55v10.25a1.55 1.55 0 1 1-3.1 0V25.319l-.857.874a13.855 13.855 0 0 1-19.072.679Z"
        fill="#fff"
        stroke="#000"
      />
    </Svg>
    )
}

export function BackIcon(props)  {
  return(
  <Svg
    {...props}
    width={11}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.75 18.75 1 10l8.75-8.75"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )

}

export const ColorWatch = (props) => (
  <Svg
    {...props}
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6.75 19.25h.013m-.013 5a5 5 0 0 1-5-5v-15a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v15a5 5 0 0 1-5 5v0Zm0 0h15a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5h-2.929l-12.071 10Zm5-17.071 2.071-2.072a2.5 2.5 0 0 1 3.535 0l3.536 3.537a2.5 2.5 0 0 1 0 3.535L10.285 22.785 11.75 7.179Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const ClockIcon = (props) => (
  <Svg
    {...props}
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 6v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
