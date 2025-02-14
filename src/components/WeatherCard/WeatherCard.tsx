import { useAppSelector } from "store/hooks";
import { WeatherCardWrapper, OutputBlock, TemperatureBlock, City, Icon, IconWrapper, DeleteBtnWrapper, DeleteButton } from "./styles";
import { weatherAppSelectors } from "store/redux/weatherAppSlice/weatherAppSlice";
import { WeatherCardProps } from "./types";


function WeatherCard({ city, temp, iconUrl, onDelete, isHistory = false }: WeatherCardProps) {

    return (
        <WeatherCardWrapper>
            <OutputBlock>
                <TemperatureBlock>{temp}</TemperatureBlock>
                <City>{city}</City>
            </OutputBlock>
            <IconWrapper>
                <Icon src={iconUrl} />
                <Icon src={iconUrl} />
                <Icon src={iconUrl} />
            </IconWrapper>
            {isHistory && onDelete && (<DeleteBtnWrapper>
                <DeleteButton onClick={onDelete} >X</DeleteButton>
            </DeleteBtnWrapper>)}
        </WeatherCardWrapper>
    );
}

export default WeatherCard;