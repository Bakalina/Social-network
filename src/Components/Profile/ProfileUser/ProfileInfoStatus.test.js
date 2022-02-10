import React from "react";
import { create } from "react-test-renderer";
import ProfileInfoStatus from "./ProfileInfoStatus";

describe("ProfileInfoStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileInfoStatus status="it-kamasutra" />);
        const instance = component.getInstance();
        expect(instance.status).toBe("it-kamasutra");
    });
});