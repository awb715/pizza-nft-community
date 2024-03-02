import { useReadContract } from 'wagmi';
import { RandomnessReceiver_ABI } from '../../abi/objects';

function useRandomizer() {
  const result = useReadContract({
    abi: RandomnessReceiver_ABI,
    address: '0x1d709a7C76a8af1eCbd1Bbe9388fBa366610F311',
    functionName: 'requestRandomnessTestPreset',
  });

  return result;
}

export { useRandomizer };