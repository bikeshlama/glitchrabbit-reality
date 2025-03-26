
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

// Define the shape of our wallet context
interface WalletContextType {
  address: string | null;
  isConnecting: boolean;
  isConnected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

// Create the context with a default value
const WalletContext = createContext<WalletContextType>({
  address: null,
  isConnecting: false,
  isConnected: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

// Custom hook to use the wallet context
export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  // Check if wallet was previously connected
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      setAddress(savedAddress);
      setIsConnected(true);
    }
  }, []);

  // Mock wallet connection - in a real app, you would use a library like ethers.js or web3.js
  const connectWallet = async () => {
    setIsConnecting(true);
    
    try {
      // Check if ethereum object exists (MetaMask)
      if (window.ethereum) {
        try {
          // Request account access
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          
          if (accounts.length > 0) {
            const userAddress = accounts[0];
            setAddress(userAddress);
            setIsConnected(true);
            localStorage.setItem("walletAddress", userAddress);
            
            // Display success toast
            toast({
              title: "Wallet Connected",
              description: `Connected to ${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`,
              variant: "default",
            });
            
            return userAddress;
          }
        } catch (error) {
          console.error("Error connecting to MetaMask", error);
          toast({
            title: "Connection Failed",
            description: "Could not connect to your wallet. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        // No ethereum object found
        toast({
          title: "Wallet Not Found",
          description: "Please install MetaMask or another Web3 wallet.",
          variant: "destructive",
        });
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setIsConnected(false);
    localStorage.removeItem("walletAddress");
    
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
      variant: "default",
    });
  };

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnecting,
        isConnected,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
