import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, getToken, sendTokenToSNS } from "./phone.js";

const typeDefs = gql`
  # Return
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  # Args
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [BoardReturn] # => 배열 안에 객체 여러개를 의미
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput): String
    createTokenOfPhone(phone: String): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: () => {
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다",
          contents: "내용입니다",
        },
        {
          number: 2,
          writer: "영희",
          title: "제목입니다",
          contents: "내용입니다",
        },
        {
          number: 3,
          writer: "훈이",
          title: "제목입니다",
          contents: "내용입니다",
        },
      ];

      return result;
    },
  },

  Mutation: {
    createBoard: (parent, args, context, info) => {
      console.log("args", args);
      return "등록 성공!!";
    },

    createBoard2: (_, args) => {
      console.log("args", args);
      return "등록 성공!!";
    },

    createTokenOfPhone: (_, args) => {
      // phone => args.phone
      const isValid = checkValidationPhone(args.phone);
      if (isValid) {
        const token = getToken();

        // phone => args.phone
        sendTokenToSNS(args.phone, token);
        return "인증 완료!!!";
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready ar ${url}`);
});
