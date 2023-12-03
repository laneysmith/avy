import { renderHook, act } from "@testing-library/react";
import {
  useTheme,
  THEME_STORAGE_KEY,
  TEXT_SIZE_STORAGE_KEY,
} from "components/ui/theme-provider";
import { wrapper } from "infrastructure/tests/wrappers";

describe("ThemeProvider test", () => {
  let getItemSpy: jest.SpyInstance;
  let setItemSpy: jest.SpyInstance;

  beforeEach(() => {
    getItemSpy = jest.fn();
    setItemSpy = jest.fn();
    jest.spyOn(Storage.prototype, "getItem");
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.getItem = getItemSpy as unknown as (
      key: string
    ) => string | null;
    Storage.prototype.setItem = setItemSpy as unknown as (
      key: string
    ) => string | null;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("defaults theme and base font size when not set on local storage", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toEqual({
      theme: "light",
      toggleTheme: expect.any(Function),
      baseFontSize: "font-size-normal",
      toggleBaseFontSize: expect.any(Function),
    });
  });

  test("sets theme and base font size based on previous selection when set on local storage", async () => {
    getItemSpy.mockReturnValueOnce("dark");
    getItemSpy.mockReturnValueOnce("font-size-big");
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toEqual({
      theme: "dark",
      toggleTheme: expect.any(Function),
      baseFontSize: "font-size-big",
      toggleBaseFontSize: expect.any(Function),
    });
  });

  test("toggles theme and updates local storage", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toEqual("light");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toEqual("dark");
    expect(setItemSpy).toHaveBeenCalledWith(THEME_STORAGE_KEY, "dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toEqual("light");
    expect(setItemSpy).toHaveBeenCalledWith(THEME_STORAGE_KEY, "light");
  });

  test("toggles baseFontSize and updates local storage", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.baseFontSize).toEqual("font-size-normal");

    act(() => {
      result.current.toggleBaseFontSize();
    });

    expect(result.current.baseFontSize).toEqual("font-size-big");
    expect(setItemSpy).toHaveBeenCalledWith(
      TEXT_SIZE_STORAGE_KEY,
      "font-size-big"
    );

    act(() => {
      result.current.toggleBaseFontSize();
    });

    expect(result.current.baseFontSize).toEqual("font-size-normal");
    expect(setItemSpy).toHaveBeenCalledWith(
      TEXT_SIZE_STORAGE_KEY,
      "font-size-normal"
    );
  });
});
