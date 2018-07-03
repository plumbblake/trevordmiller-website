import React from "react";
import { spacing } from "utils/theme";
import Well from "components/Well";
import JoinEmailList from "./components/JoinEmailList";
import Accounts from "./components/Accounts";

const Follow = () => (
  <section
    style={{
      textAlign: "center"
    }}
  >
    <Well>
      <div
        style={{
          marginTop: spacing.small
        }}
      >
        <JoinEmailList />
      </div>

      <div
        style={{
          marginTop: spacing.large
        }}
      >
        <Accounts />
      </div>
    </Well>
  </section>
);

export default Follow;
