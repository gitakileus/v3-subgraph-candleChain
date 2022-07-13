import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    let staticDefinitions = new Array<StaticTokenDefinition>(6)

    // Add USDC
    let tokenUSDC = new StaticTokenDefinition(
      Address.fromString('0x95A0A7953F9292838C0614D690005D5c716E718E'),
      'USDC',
      'USDC',
      BigInt.fromI32(6)
    )
    staticDefinitions.push(tokenUSDC)

    // Add WETH
    let tokenWETH = new StaticTokenDefinition(
      Address.fromString('0xb750990F953B36F806d0327678eCFB4eEFd16979'),
      'WETH',
      'WETH',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenWETH)

    // Add SHIBA
    let tokenSHIBA = new StaticTokenDefinition(
      Address.fromString('0xa018034190943D6c8E10218d9F8E8Af491272411'),
      'SHIBA',
      'SHIBA',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenSHIBA)

    // Add ZED
    let tokenZED = new StaticTokenDefinition(
      Address.fromString('0x5c17C48F127D6aE5794b2404F1F8A5CeED419eDf'),
      'ZED',
      'ZED',
      BigInt.fromI32(6)
    )
    staticDefinitions.push(tokenZED)

    // Add DAI
    let tokenDAI = new StaticTokenDefinition(
      Address.fromString('0xad43669cbAC863e33449d423261E525de8da0Ff4'),
      'DAI',
      'DAI',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenDAI)

    // Add WCNDL
    let tokenHPB = new StaticTokenDefinition(
      Address.fromString('0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2'),
      'HPB',
      'HPBCoin',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenHPB)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}
