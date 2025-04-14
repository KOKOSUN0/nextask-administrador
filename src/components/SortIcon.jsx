const SortIcon = ({ id, className = "", style = {} }) => (
    <svg
      className={className}
      id={id}
      style={style}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5C7.55228 5 8 5.44772 8 6V15.5858L10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929C12.0976 13.6834 12.0976 14.3166 11.7071 14.7071L7.70711 18.7071C7.31658 19.0976 6.68342 19.0976 6.29289 18.7071L2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929C2.68342 12.9024 3.31658 12.9024 3.70711 13.2929L6 15.5858V6C6 5.44772 6.44772 5 7 5ZM16.2929 5.29289C16.6834 4.90237 17.3166 4.90237 17.7071 5.29289L21.7071 9.29289C22.0976 9.68342 22.0976 10.3166 21.7071 10.7071C21.3166 11.0976 20.6834 11.0976 20.2929 10.7071L18 8.41421V18C18 18.5523 17.5523 19 17 19C16.4477 19 16 18.5523 16 18V8.41421L13.7071 10.7071C13.3166 11.0976 12.6834 11.0976 12.2929 10.7071C11.9024 10.3166 11.9024 9.68342 12.2929 9.29289L16.2929 5.29289Z"
        fill="currentColor"
      />
    </svg>
  );
  
  export default SortIcon;
  