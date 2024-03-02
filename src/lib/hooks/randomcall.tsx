import { useReadContract } from 'wagmi'
import { RandomnessReceiver_ABI} from '../../abi/objects';

function randomizer() {
    const result = useReadContract({
      abi:RandomnessReceiver_ABI,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      functionName: 'totalSupply',
    })

    return result;
  }

export {randomizer}