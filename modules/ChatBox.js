const ChatBox = (props) => {
  const { file, demo } = props;
  return (
    <div className="flex flex-col w-[30%] border-[1px]">
      <div className="flex flex-row gap-4 bg-[#F5F5F5] p-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#000"
              d="M15 5c-2.75 0-4.975 2.25-4.975 5L10 50c0 2.75 2.225 5 4.975 5H45c2.75 0 5-2.25 5-5V20L35 5H15Zm17.5 17.5V8.75L46.25 22.5H32.5Z"
            />
            <rect
              width="26.808"
              height="16.596"
              x="1.277"
              y="29.362"
              fill="#fff"
              rx="2.553"
            />
            <path
              fill="#000"
              d="M11.718 36.385c0 .363-.084.697-.25 1-.167.298-.423.54-.769.724-.345.185-.774.277-1.287.277h-.947v2.252H6.937v-6.273h2.475c.5 0 .924.087 1.27.26.345.172.604.41.777.714.172.304.259.653.259 1.046Zm-2.422.786c.292 0 .51-.068.652-.206.143-.137.215-.33.215-.58 0-.25-.072-.444-.215-.581-.143-.137-.36-.206-.652-.206h-.83v1.573h.83Zm5.568-2.806c.66 0 1.239.131 1.733.393.495.262.876.632 1.144 1.108.274.471.411 1.016.411 1.636 0 .613-.137 1.158-.411 1.635a2.759 2.759 0 0 1-1.153 1.108c-.494.262-1.07.393-1.724.393h-2.35v-6.273h2.35Zm-.099 4.95c.578 0 1.028-.157 1.35-.473.321-.316.482-.762.482-1.34 0-.578-.16-1.028-.482-1.35-.322-.321-.772-.482-1.35-.482h-.724v3.646h.724Zm8.325-4.95v1.224h-2.556v1.323h1.913V38.1h-1.913v2.538h-1.528v-6.273h4.084Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h60v60H0z" />
            </clipPath>
          </defs>
        </svg>
        <div className="flex flex-col gap-2 w-[60%]">
          <p className="text-sm font-bold">Uploaded</p>
          <p className="text-sm font-medium">
            {demo
              ? file.name
              : 'Economic Development TWELFTH EDITION", Chapter 4: Contemporary Models of Development.pdf'}
          </p>
        </div>
      </div>
      <div className="overflow-y-auto grow border-[1px] px-16 py-7 font-poppins font-medium text-sm max-h-80 scrollbar-thin scrollbar-thumb-primary">
        <p>
          I. Introduction <br />
          Chapter 4 examines contemporary development and underdevelopment
          models, exploring their theories, assumptions, implications, and
          relevance for policy decisions in economic development. <br />
          <br />
          II. Linear Stages of Development Models <br />
          Rostow's stages of growth model details a five-stage process from a
          traditional society to high mass consumption. Criticisms include
          oversimplification, ethnocentric bias, and the inability to explain
          structural obstacles. <br />
          <br />
          III. Structural Change Models <br />
          Lewis two-sector model discusses the transition of surplus labor from
          agriculture to the industrial sector for economic growth. Criticisms
          include urban unemployment, limited focus on human capital, and the
          lack of solutions for modernizing agriculture. <br />
          <br />
          IV. International Dependence Models <br />
          Neocolonial dependence model highlights historical roots of
          underdevelopment and the ongoing dependence on developed countries.
          False paradigm model emphasizes misguided development policies and the
          inability to address structural issues. Dualistic development thesis
          underlines the simultaneous existence of modern and traditional
          sectors and the inability to achieve balanced growth. <br />
          <br />
          V. Neoclassical Free Market Counterrevolution <br />
          Market-friendly approach focuses on the private sector, reducing
          government intervention, and economic efficiency. Criticisms include
          inequality and social unrest, environmental degradation, and
          insensitivity to local context. <br />
          <br />
          VI. New Growth Theory and Development Economics <br />
          Knowledge as a driver of growth stresses the role of human capital,
          technological innovation, and increasing returns to scale.
          Implications for development policy include investment in education
          and research, and public-private partnerships. <br />
          <br />
          VII. Conclusion <br />
          Understanding various development and underdevelopment models is
          crucial for tailoring development strategies based on local contexts
          and challenges.
        </p>
      </div>
      <div className="p-2">
        <button className="font-poppins font-medium text-xl bg-[#ECF2F2] px-5 py-4 rounded-lg w-full flex flex-row justify-between text-text border-[1px]">
          Upload your reading - Try it out!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="25"
            fill="none"
          >
            <path
              fill="#3D3D3D"
              d="M0 22.063 9.542 12.5 0 2.937 2.938 0l12.5 12.5L2.938 25 0 22.062Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
