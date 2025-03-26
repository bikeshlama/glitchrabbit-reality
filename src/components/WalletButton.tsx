
import { useState } from "react";
import { GlitchButton } from "./GlitchButton";
import { useWallet } from "@/context/WalletContext";
import { Wallet, LogOut } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface WalletButtonProps {
  variant?: 'default' | 'purple' | 'blue' | 'pink' | 'green';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const WalletButton = ({ 
  variant = 'purple',
  size = 'sm',
  fullWidth = false
}: WalletButtonProps) => {
  const { address, isConnected, isConnecting, connectWallet, disconnectWallet } = useWallet();
  
  // Truncate the wallet address for display
  const truncatedAddress = address 
    ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    : '';

  const handleConnect = async () => {
    if (!isConnected) {
      await connectWallet();
    }
  };

  // If not connected, show connect button
  if (!isConnected) {
    return (
      <GlitchButton 
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        onClick={handleConnect}
        disabled={isConnecting}
      >
        {isConnecting ? "CONNECTING..." : "CONNECT WALLET"}
      </GlitchButton>
    );
  }

  // If connected, show address with dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <GlitchButton 
            variant={variant} 
            size={size}
            fullWidth={fullWidth}
          >
            <Wallet className="w-4 h-4 mr-2" />
            {truncatedAddress}
          </GlitchButton>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-cyber-black border border-cyber-purple text-white min-w-[200px]">
        <DropdownMenuItem 
          className="cursor-pointer hover:bg-cyber-dark focus:bg-cyber-dark text-white"
          onClick={disconnectWallet}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect Wallet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
