interface FormButtonProps {
  text: string;
  loading: boolean;
}

export default function FormButton({ text, loading }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="btn-primary py-2 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {loading ? "로딩 중" : text}
    </button>
  );
}
