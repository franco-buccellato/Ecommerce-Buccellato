>
<
##########################################################
##########################################################
#################### Funcion TMM001 ######################
##########################################################
##########################################################

#promedio diario                                              0    getPromDiario()
#Ultimo estado transferido (med_ser)                          1    getRegMedSer().getBigDecimal("ult_est_tra")
#Fecha de último estado transferido                           2    getRegMedSer().getTimestamp("ult_fec_tra")
#Máximo consumo válido                                        3    getLimiteSuperior()
#Mínimo consumo válido                                        4    getLimiteInferior()
#Lectura máxima relativa (estado del medidor)                 5    getLecturaMaxima()
#Lectura mínima relativa (estado del medidor)                 6    getLecturaMinima()
#Código de observación de la última medición                  7    getUltCodObs()
#Cantidad de dias transcurridos desde la última estimación    8    getDiasUltEst()
#Cantidad de estimaciones realizadas                          9    getCantEst()
#Cantidad de dias Estimados                                  10    getDiasEst()
#Promedio diario del último consumo no reclamado             11    getUltConsuNoReclaProm()
#Cantidad de lecturas ausentes consecutivas                  12    getCantLecAus()
#Total consumido en el periodo de calculo                    13    getTotConsumo()
#Total dias en el periodo de calculo                         14    getTotDias()
#Se saca de getFecDesde()                                    15    getFecDesde()
#FechaHasta del periodo de calculo                           16    getFecHasta(

#Consultas:
#-¿Para que el valor sea válido debe estar entre Maximo y Mínimo consumo válido? ¿Tambien se usa la última medicion?
#-¿Nos sirve de algo saber el código de observación?
#-¿Como identificamos que la última medición fue estimada? ¿con la cantidad de días transcurrdios desde la última estimación?

from inspect import modulesbyfile
from sisa.oCore.interfaces.objFun import SIRegObjFun

entrada = SIRegObjFun()
entrada.setObject('unidad', unidad.getInteger())
tipoDeUnidad = context.ejecutarRegla('TTM008', entrada)

if(tipoDeUnidad == 'MM'):
    #casos MM
    #######################
    #Obtener valorEsperado
    consumoMinimoValido = getLimiteInferior()
    consumoMaximoValido = getLimiteSuperior()
    ultimaMedicion = getTotConsumo()
    codigoObservacionEstimada = getUltCodObs()
    #######################
    if(instalar_medidor_nuevo):
        #casos con instalacion de nuevo medidor
        if(lectura_ilegible):
            #ID: MM15
        elif(recinto_sin_medidor):
            #ID: MM16
        elif(medidor_no_coincide):
            #ID: MM18
        else:
            #if(lectura_actual <= consumoMaximoValido and lectura_actual  >= consumoMinimoValido and lectura_actual >= ultimaMedicion):
            if(lectura_actual <= consumoMaximoValido and lectura_actual  >= consumoMinimoValido):
                #caso dentro del rango
                if(codigoObservacionEstimada != null):
                    #ID: NM11
                else:
                    #ID: NM6
            #caso fuera de rango y menor a la ultima
            if(lectura_actual < ultimaMedicion):
                if((motivo_rec == '3070' or motivo_rec == '1027') and cod_res != '1062'):
                    #ID: NM8
                    #ID: NM9
                elif(codigoObservacionEstimada != null):
                    #ID: NM12
            #caso fuera de rango 
            else:
                #######################
                lecturaMaximaEstimada = getLecturaMaxima()
                lecturaMinimaEstimada = getLecturaMinima()
                #######################
                diferenciaMaxima = lecturaMaximaEstimada - lectura_actual
                diferenciaMinima = lectura_actual - lecturaMinimaEstimada
                if(codigoObservacionEstimada != null and lectura_actual> lecturaMaximaEstimada):
                    #ID: MM14
                elif(diferenciaMaxima =< -1 or diferenciaMinima =< -1):
                    #ID: MM10
                else:
                    #ID: MM7
    else:
        #casos en la que no se instala medidor nuevo
        if(medidor_no_coincide):
            #ID: MM17
        #elif(lectura_actual <= valorEsperado and lectura_actual > ultimaMedicion):
        elif(lectura_actual <= consumoMaximoValido and lectura_actual  >= consumoMinimoValido):
            #ID: MM1
        else:
            #######################
            #Obtener ultimaMedicionFueEstimada
            #######################
            if(ultimaMedicionFueEstimada):
                #ID: MM5
            elif(lectura_ilegible or recinto_sin_medidor):
                #ID: MM2
                #ID: MM3
else:
    #casos NM
    if(instala_medidor_nuevo):
        if(medidor_no_informado):
            #ID: NM3
        else:
            #ID: NM2
    elif(medidor_no_informado):
        #ID: NM1


#AGUAS CORDOBESAS
#1-Generar una OT
#2-Gestión de OT
#3-
#4-
#5-

#Ciclo de vida:
#Generación por reclamo
#Ciclo
    #Se asigna
    #Se carga arreglo y o trabajo hecho.
#
#OT Cumplida
#OT Aprobada

#Si es cuadrilla propia se puede descargar desde clink o mobile
#Si descargo mobile Lo tiene que verificar