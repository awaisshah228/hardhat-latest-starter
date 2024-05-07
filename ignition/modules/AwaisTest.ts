import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const OWNER='0x26a9Ce716ED578Ea003874fD787582AAfd87E530'

const AwaisTestModule = buildModule("AwaisTestModule", (m) => {


  const AwaisTest = m.contract("AwaisTest", [OWNER]);

  return { AwaisTest };
});

export default AwaisTestModule;
