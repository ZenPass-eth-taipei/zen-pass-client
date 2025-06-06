export const ABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'ccipRouterAddress',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'linkTokenAddress',
                type: 'address',
            },
            {
                internalType: 'uint64',
                name: 'currentChainSelector',
                type: 'uint64',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
        name: 'AddressEmptyCode',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'AddressInsufficientBalance',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint64',
                name: 'chainSelector',
                type: 'uint64',
            },
        ],
        name: 'ChainNotEnabled',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'address', name: 'owner', type: 'address' },
        ],
        name: 'ERC721IncorrectOwner',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'ERC721InsufficientApproval',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'approver', type: 'address' },
        ],
        name: 'ERC721InvalidApprover',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'ERC721InvalidOperator',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'ERC721InvalidOwner',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'receiver', type: 'address' },
        ],
        name: 'ERC721InvalidReceiver',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'ERC721InvalidSender',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ERC721NonexistentToken',
        type: 'error',
    },
    { inputs: [], name: 'FailedInnerCall', type: 'error' },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'FailedToWithdrawEth',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'router', type: 'address' }],
        name: 'InvalidRouter',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'currentBalance',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'calculatedFees',
                type: 'uint256',
            },
        ],
        name: 'NotEnoughBalanceForFees',
        type: 'error',
    },
    { inputs: [], name: 'NothingToWithdraw', type: 'error' },
    { inputs: [], name: 'OnlyOnArbitrumSepolia', type: 'error' },
    {
        inputs: [
            {
                internalType: 'uint64',
                name: 'chainSelector',
                type: 'uint64',
            },
        ],
        name: 'OperationNotAllowedOnCurrentChain',
        type: 'error',
    },
    { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
    {
        inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
        name: 'SafeERC20FailedOperation',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'SenderNotEnabled',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'ApprovalForAll',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_fromTokenId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_toTokenId',
                type: 'uint256',
            },
        ],
        name: 'BatchMetadataUpdate',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'chainSelector',
                type: 'uint64',
            },
        ],
        name: 'ChainDisabled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'chainSelector',
                type: 'uint64',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'poapAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'ccipExtraArgs',
                type: 'bytes',
            },
        ],
        name: 'ChainEnabled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint64',
                name: 'sourceChainSelector',
                type: 'uint64',
            },
            {
                indexed: false,
                internalType: 'uint64',
                name: 'destinationChainSelector',
                type: 'uint64',
            },
        ],
        name: 'CrossChainReceived',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint64',
                name: 'sourceChainSelector',
                type: 'uint64',
            },
            {
                indexed: false,
                internalType: 'uint64',
                name: 'destinationChainSelector',
                type: 'uint64',
            },
        ],
        name: 'CrossChainSent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'MetadataUpdate',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferRequested',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'messageId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint64',
                        name: 'sourceChainSelector',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes',
                        name: 'sender',
                        type: 'bytes',
                    },
                    { internalType: 'bytes', name: 'data', type: 'bytes' },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'token',
                                type: 'address',
                            },
                            {
                                internalType: 'uint256',
                                name: 'amount',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct Client.EVMTokenAmount[]',
                        name: 'destTokenAmounts',
                        type: 'tuple[]',
                    },
                ],
                internalType: 'struct Client.Any2EVMMessage',
                name: 'message',
                type: 'tuple',
            },
        ],
        name: 'ccipReceive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'string', name: 'tokenUri', type: 'string' },
            {
                internalType: 'uint64',
                name: 'destinationChainSelector',
                type: 'uint64',
            },
            {
                internalType: 'enum CrossChainPOAP.PayFeesIn',
                name: 'payFeesIn',
                type: 'uint8',
            },
        ],
        name: 'crossChainMint',
        outputs: [
            { internalType: 'bytes32', name: 'messageId', type: 'bytes32' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint64',
                name: 'chainSelector',
                type: 'uint64',
            },
        ],
        name: 'disableChain',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint64',
                name: 'chainSelector',
                type: 'uint64',
            },
            {
                internalType: 'address',
                name: 'poapAddress',
                type: 'address',
            },
            { internalType: 'bytes', name: 'ccipExtraArgs', type: 'bytes' },
        ],
        name: 'enableChain',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCCIPRouter',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'string', name: 'tokenUri', type: 'string' }],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
        name: 's_chains',
        outputs: [
            {
                internalType: 'address',
                name: 'poapAddress',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'ccipExtraArgsBytes',
                type: 'bytes',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
            { internalType: 'bool', name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_beneficiary',
                type: 'address',
            },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_beneficiary',
                type: 'address',
            },
            { internalType: 'address', name: '_token', type: 'address' },
        ],
        name: 'withdrawToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
